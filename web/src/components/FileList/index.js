import React from 'react'
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

import { Container, FileInfo, Preview } from './style'
import { MdCheckCircle, MdError,MdLink } from 'react-icons/md'


const FileList = ({files}) => (
    <Container>
      {files.map(uploadFile => (
          <li key={uploadFile.id}>
          <FileInfo>
              <Preview src={uploadFile.preview} />
              <div>
                  <strong>{uploadFile.name}</strong>
                  {!!uploadFile.url && (
                      <span> <button onClick={() => {}}>Exluir</button></span>
                  )}
              </div>
                      
          </FileInfo>
          <div>
           {!uploadFile.uploaded && !uploadFile.error && (
                  <CircularProgressbar styles={{
                    root: {
                        width: 24,
                    },
                    path: {stroke: 'rgb(255,173,94)'}
                }}
                strokeWidth={10}
                percentage={uploadFile.progress}
                />
           )}

              {uploadFile.url && (
                  <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer">
                  <MdLink style={{marginRight: 8}} size={24} />
                  </a>
              )}

              {uploadFile.uploaded && (
                  <MdCheckCircle size={24} color="#78e5d5" />
              )}

              {uploadFile.error && (
                  <MdError size={24} color="red" />
              )}

          </div>
      </li>
      ))}
    </Container>
)

export default FileList