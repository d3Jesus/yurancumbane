const Spinner = () => {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <span className="spinner-border spinner-border-sm me-3" aria-hidden="true"></span>
            <span role="status">Sending...</span>
        </div>
    )
}

export default Spinner;