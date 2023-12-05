import React, { useEffect } from 'react';
import { useNavigate, Route, Routes, useLocation } from 'react-router-dom';
import CheckoutContainer from './CheckoutContainer';
import ConfirmationPage from './components/ConfirmationPage/ConfirmationPage';
import PageNotFound from './components/PageNotFound/PageNotFound';
import tofu from "./content/tofu.json";
import course from "./content/course.json";
import { updateProgramData } from './actions/programDataActions';
import { connect } from 'react-redux';


const App = (props) => {

    const location = useLocation();
    const {updateProgramData} = props || {};

    const navigate = useNavigate();


    useEffect(() => {

        const query = new URLSearchParams(location.search);
        const category = query.get('category');
        const programId = query.get('programId');
        const type = query.get('type');
      
        let relevantData = {};

        if (category === 'tofu') {
            relevantData = tofu?.[programId]?.[type] || {};
        } else if (category === 'course') {
            relevantData = course?.[programId]?.[type] || {};
        }

        updateProgramData(relevantData);

        if (!Object.keys(relevantData).length) {
            navigate('/not-found');
        }

    }, [])

    return (
        <Routes>
            <Route path="/" exact element={<CheckoutContainer />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/not-found" element={<PageNotFound />} />
        </Routes>
    );
}

export default connect(null, {updateProgramData})(App);