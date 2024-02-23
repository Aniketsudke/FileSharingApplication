"use client"
import React, { useEffect, useState } from 'react'
import UploadForm from './_components/UploadForm'
import { app } from '@/firebaseConfig'
import { getStorage, ref ,uploadBytesResumable,getDownloadURL} from "firebase/storage";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from '@clerk/nextjs';
import { generateRandomString } from '@/app/_utils/GenerateRandomString';
import { useRouter } from 'next/navigation';




const Upload = () => {
  const [docID,setFileInfoDoc] = useState(generateRandomString())
  // const [ use1 ,setUse1] = useState(0)
  const router = useRouter()
  const {user} = useUser();
  const [progress, setprogress] = useState()
  const [uploadCompleted,setUploadCompleted] = useState(false);
  const storage = getStorage(app)
  const db = getFirestore(app);
  // const storageRef = ref(storage);
  const uploadFile = (SaveFiles) =>{
    const metadata = {
      contentType: SaveFiles.type
    };
    const storageRef = ref(storage, 'fileshare/'+SaveFiles?.name);
    const uploadTask = uploadBytesResumable(storageRef, SaveFiles, SaveFiles.type);

    uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    setprogress(progress)
    if(progress == 100){
      toast.success('Successfully Uploaded', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setUploadCompleted(true)
      }
    progress == 100 && getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      saveInfo(SaveFiles,downloadURL)
    });
  }, )

  }

  
 

  const saveInfo = async(file,fileURL)=>{
    // const docID = generateRandomString();
    // setUse1(1);
    // Add a new document in collection "cities"
    await setDoc(doc(db, "uploadedFiles", docID), {
      fileName:file?.name,
      fileSize:file?.size,
      fileType:file?.type,
      fileUrl:fileURL,
      userEmail:user?.primaryEmailAddress.emailAddress,
      userName:user?.fullName,
      password:'',
      Id:docID,
      shortUrl:process.env.NEXT_PUBLIC_BASE_URL + docID
    })
  }

  useEffect(()=>{
    uploadCompleted&&
    setTimeout(()=>{
      setUploadCompleted(false)
      console.log(docID)
      router.push(('/file-preview/'+docID))
    },2000)
  },[uploadCompleted==true])
  

  return (
    <>
   
    <div className='p-5 px-8 md:px-25'>
      <h2 className='text-[20px] text-center m-5'>Start <strong className='text-primary'>Uplaoding</strong> File and <strong className='text-primary'>Share</strong>  it  </h2>
      <UploadForm uploadBtnClick={(SaveFiles)=>{uploadFile(SaveFiles)}} progressBar={progress}/>
    </div>
    <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover
                    theme="light"
                    />
    </>
  )
}

export default Upload