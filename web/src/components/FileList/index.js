import React from 'react'
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

import { Container, FileInfo, Preview } from './style'
import { MdCheckCircle, MdError,MdLink } from 'react-icons/md'


const FileList = () => (
    <Container>
        <li>
            <FileInfo>
                <Preview src="https://uploadimagesrifas.s3.us-east-2.amazonaws.com/3d152148c71f77d0cdec4df72a5d0274+-+tabuleiro.jpeg" />
                <div>
                    <strong>profile.png</strong>
                    <span> <button onClick={() => {}}>Exluir</button></span>
                </div>
                        
            </FileInfo>
            <div>
                <CircularProgressbar styles={{
                    root: {
                        width: 24,
                    },
                    path: {stroke: 'rgb(255,173,94)'}
                }}
                strokeWidth={10}
                percentage={60}
                />

                <a
                href="#"
                target="_blank"
                rel="noopener noreferrer">
                <MdLink style={{marginRight: 8}} size={24} />
                </a>

                <MdCheckCircle size={24} color="#78e5d5" />
                <MdError size={24} color="red" />

            </div>
        </li>
    </Container>
)

export default FileList