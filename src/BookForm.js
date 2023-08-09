import axios from "axios";

function BookForm(params) {

    function save() {
        // axios.defaults.headers.post['Access-Control-Allow-Origin'] = "*";
        // axios.defaults.headers.post['content-type'] = 'application/json';

        fetch('http://localhost:5199/api/Books', {
            method: 'post',
            data: {
                "bookName": "Book new",
                "category": "veniam laborum ut",
                "author": "aliquip proident qui in",
                "newField": "test"
            },
            headers:{
                'content-type':'application/json',
                'Access-Control-Allow-Origin':"*"
            }
        }

        )
    }
    return (
        <div>
            Book Form
            <div>
                <input placeholder='name' />
                <button onClick={save}>Save</button>
            </div>
        </div>
    )
}
export default BookForm;