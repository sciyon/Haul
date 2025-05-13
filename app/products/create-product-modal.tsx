"use client"

import { Box, Button, TextField, Modal, Stack } from "@mui/material"
import { useState } from "react"
import createProduct from "./create-product"
import { FormResponse } from "../common/form-response.interface"

const styles= {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 4,
}

interface CreateProductModalProps {
  open: boolean
  handleClose: () => void
}

export function CreateProductModal(
  { open, handleClose }: CreateProductModalProps
) {
  const [response, setResponse] = useState<FormResponse>();

  const onClose = () => {
    setResponse(undefined);
    handleClose();
  }


  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={styles}>
        <form 
          className="w-full max-w-xs" 
          action={ async (formData) => {
            const response = await createProduct(formData);
            setResponse(response);
            if(!response.error){
              onClose();
            }
          }}
        >
          <Stack spacing={2}>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              required
              helperText={response?.error}
              error={!!response?.error}
            />
            <TextField
              name="description"
              label="Description"
              variant="outlined"
              required
              helperText={response?.error}
              error={!!response?.error}
            />
            <TextField
              name="price"
              label="Price"
              variant="outlined"
              required
              helperText={response?.error}
              error={!!response?.error}
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  )
}