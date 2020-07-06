import React from 'react';
import { Link } from 'react-router-dom';

import './needZotli.scss';

function NeedZotli() {
    return (
        <div className="NeedZotli">
            <div className="container">
                <div className="need-zotli-body">
                    <div className="row">
                        <div className="col-lg-10 need-zotli-col">
                            <h5 className="need-zotli-text">Давайте сделаем наш город ещё чище</h5>
                            <Link to="/application" className="button button-outline-success">Оставить заявку</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NeedZotli;