import { ref } from 'vue'

export function useFileUpload() {
  const fileInput = ref(null)
  const mediaInput = ref(null)

  const handleFileUpload = (event) => {
    const files = event.target.files
    if (!files.length) return

    const formData = new FormData()
    Array.from(files).forEach(file => {
      formData.append('files[]', file)
    })

    event.target.value = ''
  }

  const handleMediaUpload = (event) => {
    const files = event.target.files
    if (!files.length) return

    const formData = new FormData()
    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
        formData.append('media[]', file)
      }
    })

    event.target.value = ''
  }

  return {
    fileInput,
    mediaInput,
    handleFileUpload,
    handleMediaUpload
  }
}
