import React, {useContext, useState,useEffect} from 'react'
import {Context} from '../Context/AuthContext'
import Dropzone from 'react-dropzone'
import { DropContainer, UploadMessage} from './style/style'
import FileList from '../components/FileList/index'
import { uniqueId } from 'lodash'
import filesize from 'filesize'
import api from '../services/api'

function Image () {


  const [teste, setTeste] = useState([])

    const handleSubmit = (files) => {
       
            const uploadFiles = files.map(file => ({
                file,
                id: uniqueId(),
                name: file.name,
                readableSize: filesize(file.size),
                preview: URL.createObjectURL(file),
                progress: 0,
                uploaded: false,
                error: false,
                url: null
            }))
    
            setTeste([...teste, {
                file: uploadFiles[0].file,
                name: uploadFiles[0].name,
                readableSize: uploadFiles[0].readableSize,
                preview: uploadFiles[0].preview,
                progress: 0,
                uploaded: false,
                error: false,
                url: null,
                id: uploadFiles[0].id
             }])


             const updateFile = (id, data) => {
                
                setTeste(teste.map(uploadFile => {
                    return id === uploadFile.id ? {...teste, ...data} : uploadFiles[0]
                }))
             }
     
        const idRifa = localStorage.getItem('id')
        const data = new FormData()
        data.append("file", uploadFiles[0].file)
        api.post(`http://localhost:3333/images/${idRifa}`, data, {
            onUploadProgress: e => {
                const progress = parseInt(Math.round((e.loaded * 100) / e.total))
                updateFile(uploadFiles[0].id, {
                    progress:progress
                })
            }
        })
    }


     const renderDragMessage = (isDragActive, isDragReject) => {
        if(!isDragActive) {
            return <UploadMessage>Arraste ou selecione arquivos aqui</UploadMessage>
        }
        if(isDragReject) {
            return <UploadMessage type="error">Arquivo não suportado</UploadMessage>
        }

        return <UploadMessage type="success"> Soltar arquivos aqui </UploadMessage>
    }

    return (
        <div className="container-create-rifa">
            <div className="container-form">
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "Arial"}}>
                        <h1> <span className="orange">A</span>dicionar <span className="orange">I</span>magem</h1>
                    </div>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "60px"}}>
                            <Dropzone onDropAccepted={handleSubmit}
                                    style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                                    accept="image/*" >
                                { ({getRootProps, getInputProps, isDragActive, isDragReject}) => (
                                   <DropContainer 
                                   {...getRootProps()} 
                                   isDragActive={isDragActive}
                                   isDragReject={isDragReject}>
                                       <input {...getInputProps()} />
                                       {renderDragMessage(isDragActive, isDragReject)}
                                   </DropContainer>
                                   
                                )}
                            </Dropzone>
                            { !! teste.length && (
                                <FileList files={teste} />
                            )}
                    </div>  
            </div>
        </div>
    )
}


export default Image