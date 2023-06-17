import React from 'react';
import { useForm } from 'react-hook-form';

const AddEvent = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        fetch('http://localhost:5000/event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));

        reset();
    };

    return (
        <div>
            <div className="d-flex justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{ position: 'relative' }}>
                        <div className="d-flex bg-white mt-5 px-5 pt-4 pb-5 border border-1 rounded-2">
                            <div className="me-3">
                                <label htmlFor="name" style={{ fontSize: '10px' }}>
                                    Event Title
                                </label>
                                <br />
                                <input style={{ border: '1px solid gray', borderRadius: '4px' }} type="text" name="name" {...register('name', { required: true })} />
                            </div>
                            <div>
                                <label htmlFor="banner" style={{ fontSize: '10px' }}>
                                    Banner
                                </label>
                                <br />
                                <input style={{ border: '1px solid gray', borderRadius: '4px' }} type="text" name="banner" {...register('banner', { required: true })} />
                            </div>
                        </div>
                        <button className="bg-primary text-white border border-primary rounded-1" style={{ position: 'absolute', right: '0' }}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEvent;
