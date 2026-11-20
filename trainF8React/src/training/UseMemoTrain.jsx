import { useMemo, useState } from "react"

function UseMemoTrain() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])

    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: +price
        }])
    }

    //bị tính lại ko cần thiết khi nhập input(vì nó khiến re-render)
    // const total = products.reduce((result, prod) => {
    //     console.log('Tinh toan lai...')

    //     return result + prod.price
    // }, 0)

    //đối số: nhận 1 callback trả về kết quả tính toán, đối số 2: mảng dependency
    //chỉ chạy đoạn này khi products thay đổi
    //giá trị trả về sẽ là giá trị của total
    const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            console.log('Tinh toan lai...')

            return result + prod.price
        }, 0)

        return result
    }, [products])

    return (
        <div>
            <input
                value={name}
                placeholder="Enter name..."
                onChange={e => setName(e.target.value)}
            />
            <br />
            <input
                value={price}
                placeholder="Enter price..."
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>Add</button>
            <br />
            Total: {total}
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name}-{product.price}</li>
                ))}
            </ul>
        </div>
    )
}

export default UseMemoTrain