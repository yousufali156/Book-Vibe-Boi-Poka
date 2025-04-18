import React from 'react';

const Book = ({singleBook}) => {
    // const data=Use{bookPromise};
    // console.log(data)
    // console.log(singleBook)

    const {bookName, author, image}= singleBook;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm py-3 ">
                <figure>
                    <img 
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;