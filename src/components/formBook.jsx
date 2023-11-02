
const FormBook = ( params ) => {
    return (
        <div>
            Input Buku
            <form onSubmit={ params.onInputSubmit }>
                <div>
                    <input type='text' placeholder='isbn buku' value={ params.isbn } onChange={ params.setIsbn }/>
                </div>
                <div>
                    <input type='text' placeholder='nama buku' value={ params.title } onChange={ params.setTitle }/>
                </div>
                <div>
                    <button type='submit'>Simpan</button>
                </div>
            </form>
        </div>
    );
};

export default FormBook;