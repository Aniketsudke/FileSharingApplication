"use client"
import React, { useState } from 'react'
import UploadForm from './_components/UploadForm'
import { app } from '@/firebaseConfig'
import { getStorage, ref ,uploadBytesResumable,getDownloadURL} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from '@clerk/nextjs';
import { generateRandomString } from '@/app/_utils/GenerateRandomString';




const Upload = () => {
  const {user} = useUser();
  const [progress, setprogress] = useState()
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
    }
    progress == 100 && getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }, )

  }

  const saveInfo = async(file,fileURL)=>{
    const docId = Date.now().toString();
    // Add a new document in collection "cities"
    await setDoc(doc(db, "uploadedFiles", docId), {
      fileName:file.Name,
      fileSize:file.size,
      fileType:file.type,
      fileUrl:fileURL,
      userEmail:user.primaryEmailAddress.emailAddress,
      userName:user.fullName,
      password:'',
      shortUrl:process.env.NEXT_PUBLIC_BASE_URL + generateRandomString()
});
  }

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