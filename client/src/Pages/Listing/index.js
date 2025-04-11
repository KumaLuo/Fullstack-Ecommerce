import Sidebar from "../../Components/Sidebar";


const Listing = () => {
    return (
        <section className="product_list_page">
            <div className="container">
                <div className="product_list d-flex">

                    <Sidebar />

                    <div className="content_right">
                        content_right
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Listing;