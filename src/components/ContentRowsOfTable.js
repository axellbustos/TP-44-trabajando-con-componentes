
export const ContentRowsOfTable = ({title, length, rating, awards, genre}) => {
    return (
    <tr key="">
        <td>{title}</td>
        <td>{length}</td>
        <td>{rating}</td>
        <td>{genre}</td>
        <td>{awards}</td>
    </tr>
    )
}