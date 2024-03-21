/* eslint-disable no-unused-vars */

import { useNavigate } from "react-router-dom";

function TitlesCom() {
    const navigate = useNavigate();

    return (
        <>
            <section className="titles" id="titles">
                <div className="container">
                    <p>Home / Products / POS / Name Of Product </p>
                </div>
            </section>
        </>
    );
}

export default TitlesCom;
