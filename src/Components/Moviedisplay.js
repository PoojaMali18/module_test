import React from "react";

const Moviedisplay = ({movies}) => {
    return (
        <div className="cont1">
            <br/>
            <table className="tablee" style={{ margin: "auto" }}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((item, index) => (
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.genre}</td>
                            <td>{item.year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Moviedisplay;
