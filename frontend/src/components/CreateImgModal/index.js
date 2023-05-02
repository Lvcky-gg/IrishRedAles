import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import './imgUpload.css'
import { createImg } from "../../store/images";
import { useParams } from "react-router-dom";

const UploadImg = ({breweryId}) => {
    const { closeModal, setOnModalClose } = useModal();
    const validFile = ['image/jpg', 'image/jpeg', 'image/png']
    const [file, setFile] = useState(null);
    const [error, setError] = useState([])
    const dispatch = useDispatch()
    // console.log(file)
    const submitImg = (e) => {
        e.preventDefault()
        if(validFile.find(type =>type === file.type)){
            dispatch(createImg({
                breweryId,
                image:file
            }))
        }else{
            setError(["Invalid file type."])
        }
        return

    }

    return (
        <div>
        <form onSubmit={submitImg}>
             <input 
             type="file" 
             onChange={(e) => setFile(e.target.files[0])}
             />
             <button className="buttonStyle">Submit</button>
        </form>
        {error[0] && (
            <p>{error[0]}</p>
        )}
        </div>
    )
}
export default UploadImg