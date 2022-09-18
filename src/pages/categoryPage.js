import React, { useState, useEffect } from 'react';
import { Form, Card } from 'react-bootstrap';
import { firestore } from '../firebase/firebase-utils'

const CategoryPage = (props) => {
    const [bits, setbits] = useState([]);

    useEffect(() => {
        var data = []
        firestore.collection(props.match.params.category).where('level', '==', props.location.state['level']).get()
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => {
                    data = [...data, doc.data()]
                    setbits(data)
                })
            })
    }, []);

    return (
        <div style={{ marginTop: '-10%' }}>
            <h3 style={{ textAlign: 'center' }}>
                {props.match.params.category} MCQ's
            </h3><br /><br />
            {bits?.map((bit, i) =>
                <Card style={{ minWidth: '700px', marginBottom:'30px' }} key={i}>
                    <div style={{ padding: '30px' }}>
                        <h4>{bit.question}</h4><br />
                        {bit.options.map((option, i) => <div key={i} style={{ display: 'flex' }}><Form.Check type="radio" />&nbsp;&nbsp;{option}<br /><br /></div>)}
                    </div>
                </Card>
            )}
        </div>
    );
};

export default CategoryPage;