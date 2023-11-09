const FormBorrow = ( params ) => {
    return (
        <div>
            <h2>Input Peminjaman</h2>
            <form onSubmit={ params.onInputSubmit }>
                <div>
                    <label htmlFor="bookId">ID Buku</label><br />
                    <input type="text" placeholder="ID Buku" id="bookId" value={ params.bookId } onChange={ params.setBookId }/>
                </div>
                <div>
                    <label htmlFor="memberId">ID Anggota</label><br />
                    <input type="text" placeholder="Nomor Anggota" id="memberId" value={ params.memberId } onChange={ params.setMemberId }/>
                </div>
                <div>
                    <label htmlFor="startDate">Tanggal Peminjaman</label><br />
                    <input type="date" name="tanggal-peminjaman" id="startDate" />
                </div>
                <div>
                    <label htmlFor="endDate">Tangal Pengembalian</label><br />
                    <input type="date" name="tanggal-pengembalian" id="endDate" />
                </div>
                <div>
                    <button type="submit">Pinjam Buku</button>
                </div>
            </form>
        </div>
    );
};

export default FormBorrow;