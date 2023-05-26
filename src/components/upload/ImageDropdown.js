import React, { useState } from 'react'
import { Button, Flex, Input } from '@chakra-ui/react'
import axios from 'axios'

function UploadFile() {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setSelectedFile(file)
  }

  const handleFileUpload = () => {
    const formData = new FormData()
    formData.append('file', selectedFile)

    axios.post('/api/upload/', formData)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <Flex align="center">
      <Input type="file" onChange={handleFileChange} />
    </Flex>
  )
}

export default UploadFile