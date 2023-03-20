import React, { useState, useEffect } from 'react'
// import { View, Text, ScrollView, Pressable, TouchableOpacity, Image } from 'react-native' // 0.0.1
import axios from 'axios'


const UploadImage = () => {

    const [image, setImage] = useState('');


    //   useEffect(() => {

    //   }, [])

    const submitFun = () => {

        if (image === '') {
            return alert("Please select Image.")
        }

        console.log("image image",image)

        const formData = new FormData()
        formData.append('physician_id', '6299f322c62610707e45566e');
        formData.append('image', image[0]);
        console.log("formData formData", formData);

        axios({
            method: "post",
            url: "",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                //handle success
                console.log("response is here", response);
                console.log(
                    {
                        method: "post",
                        url: "",
                        data: formData,
                        headers: { "Content-Type": "multipart/form-data" },
                    }
                );
            })
            .catch(function (err) {
                //handle error
                console.log("Error is here", err);
            });

    }


    return (
        <div>
            <input type="file" placeholder='insert your File' multiple onChange={(e) => setImage(e.target.files)} />
            <button onClick={() => submitFun()} >Submit Button.</button>
        </div>
    )
}

export default UploadImage
