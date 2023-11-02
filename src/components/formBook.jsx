const FormBook = (BookName, setBookName, handleSubmit) => {
    return (
        <div>
            Input Buku
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type='text' placeholder='nama buku'/>
                <button type='submit'>Simpan</button>
            </form>
        </div>
    );
};

export default FormBook;