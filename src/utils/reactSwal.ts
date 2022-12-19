import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const reactSwal = withReactContent(Swal)

export const sweetAlertOptions = {
    confirmButtonColor: '#15803D',
    cancelButtonColor: '#d33',
}

export const showSwalLoading = (message = 'Por favor, aguarde...') => {
    reactSwal.fire({
        title: message,
        allowEscapeKey: false,
        allowOutsideClick: false,
    })
    reactSwal.showLoading(null)
}

export const showSwalSuccess = (message: string) => {
    reactSwal.fire({
        title: 'Sucesso!',
        icon: 'success',
        text: message,
        confirmButtonColor: sweetAlertOptions.confirmButtonColor,
    })
}

export const showSwalError = (message: string) => {
    reactSwal.fire({
        title: 'Oops!',
        icon: 'error',
        text: message,
        confirmButtonColor: sweetAlertOptions.confirmButtonColor,
    })
}

export const showSwalWarning = (message: string) => {
    reactSwal.fire({
        title: 'Alerta',
        icon: 'warning',
        text: message,
        confirmButtonColor: sweetAlertOptions.confirmButtonColor,
    })
}

export const closeSwal = () => {
    reactSwal.close()
}

export default reactSwal
