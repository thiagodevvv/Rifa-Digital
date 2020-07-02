import React, {useContext, useState} from 'react'
import {Context} from '../Context/AuthContext'
import Dropzone from 'react-dropzone'
import { DropContainer, UploadMessage} from './style/style'
import FileList from '../components/FileList/index'
import { uniqueId } from 'lodash'
import filesize from 'filesize'


function Image () {

   const [state, setState] = useState([])
    
    const { AddImage } = useContext(Context)

    const handleSubmit =  files => {
       
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

            setState(... uploadFiles)
     try {
     const func = async () => {
        await AddImage(files)
     }
     func()
     }catch(err) {
         console.log(err)
     }
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
                            { !! state.length && (
                                <FileList files={state} />
                            )}
                    </div>  
            </div>
        </div>
    )
}


export default Image