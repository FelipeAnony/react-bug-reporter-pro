import { TranslationsType } from './translations'

interface OnFileUploadedParams<T, U> {
    requestsFileUploadResult?: T
    videoUploadResult?: U
    error?: unknown
}

/**
 * Props for the ReactBugReporterProWrapper component.
 *
 * @template T - The type of the result from the request file upload callback.
 * @template U - The type of the result from the video upload callback.
 */
interface ReactBugReporterProWrapperProps<T, U> {
    /** An optional description of the bug being reported. */
    description?: {
        value: string
        onValueChange: (newValue: string) => void
    }

    /** If true, the modal will close after downloading files. */
    closeModalAfterDownload?: boolean

    /** If true, audio recording will be enabled. */
    audioEnabled?: boolean

    /** Additional class names for styling. */
    className?: string

    /** Custom translations for button labels. */
    translations?: TranslationsType

    /** If true, allows users to download recorded files. */
    allowDownloadFiles?: boolean

    /** Custom file names for uploads. */
    customFileNames?: {
        reqFileName?: string
        vidFileName?: string
    }

    /** Callback functions for file uploads. */
    uploadFiles?: {
        uploadRequestFileCallback?: (httpReqsFile: FormData) => Promise<T>
        uploadVideoCallback?: (videoFile: FormData) => Promise<U>
    }

    /** Callback invoked after files have been uploaded with the result of the uploads callbacks or error if exist. */
    onFileUploaded?: (params: OnFileUploadedParams<T, U>) => Promise<unknown>
}

export type ReactBugReporterProWrapperType = <T, U>(
    props: ReactBugReporterProWrapperProps<T, U>
) => JSX.Element
