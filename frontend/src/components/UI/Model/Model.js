import "./Model.css"
function Model(props) {

    function clickHandler(){
        window.location.replace("/")
    }
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header  md-bg">
                        <h5 class="modal-title" id="exampleModalLabel">{props.title}</h5>
                    </div>
                    <div class="modal-body">
                        {props.message}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary close-text" data-bs-dismiss="modal" onClick={clickHandler}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model;