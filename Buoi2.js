const courses = [
  {
    "id": 1,
    "title": "Lập trình Python từ cơ bản đến nâng cao",
    "instructor": "Nguyễn Văn A",
    "duration_hours": 35,
    "price_vnd": 499000,
    "rating": 4.8,
    "tags": ["Python", "Programming", "Backend"],
    "image_url": "https://picsum.photos/id/870/200/300?grayscale&blur=2"
  },
  {
    "id": 2,
    "title": "Thiết kế UI/UX thực chiến với Figma",
    "instructor": "Trần Thị B",
    "duration_hours": 20,
    "price_vnd": 399000,
    "rating": 4.9,
    "tags": ["UI/UX", "Figma", "Design"],
    "image_url": "https://picsum.photos/200/300?grayscale"
  },
  {
    "id": 3,
    "title": "Digital Marketing toàn diện cho người mới",
    "instructor": "Lê Văn C",
    "duration_hours": 25,
    "price_vnd": 299000,
    "rating": 4.7,
    "tags": ["Marketing", "SEO", "Social Media"],
    "image_url": "https://picsum.photos/seed/picsum/200/300"
  }
];

function CourseItem({ course, handleClick }) {
  return (
    <div>
      <h2 className='course-title' onDoubleClick={() => handleClick(course.price_vnd)}>{course.title}</h2>
      <img className='course-img' src={course.image_url} alt={course.title} />
      <p className='course-tags'>{course.tags.join(', ')}</p>
      <p className='course-instructor'>{course.instructor}</p>
    </div>
  )
}

//onDoubleClick: double click 2 cái sẽ kích hoạt gì đó


//Container, ko nên xử lý sâu logic
//ko được đặt tên React component với tên đầu viết thường, chữ cái đầu phải viết hoa giống camel case
function App() {

  const handleClick = (price_vnd) => {
    alert(`Khóa học này ${price_vnd} vnđ`)
  }

  return (
    <div id="wrapper">
      {courses.map(course => (
        <CourseItem
          course={course}
          handleClick={handleClick}
        />
      ))}
    </div>
  )
}

const Form = {
  //hàm này vẫn dùng để làm component được
  Input() {
    return <input />
  },
  CheckBox() {
    return <input type="checkbox" />
  }
}

function App2() {

  const type = 'CheckBox'

  //gán MyComponent vì mặc dù Form[type] là component nhưng JSX ko cho dùng dấu []
  const MyComponent = Form[type]

  return (
    <div id="wrapper">
      <MyComponent />
    </div>
  )
}

ReactDOM.render(<App2 />, document.getElementById('root'))

function Button({ title, href, onClick }) {
  //phải viết hoa để gán lại, react vô tình hiểu nó là component
  let Component = 'button'
  const props = {}

  if (href) {
    Component = 'a'
    props.href = href
  }

  if (onClick) {
    props.onClick = onClick
  }
  return (
    //JSX dịch spread để trong element sẽ viết dạng key={value}
    //nên mới có chuyện onclick={console.log(Math.random())}
    <Component {...props}>{title}</Component>
  )
}

function App3() {
  return (
    <div id="wrapper">
      <Button
        title="Click me"
        //href="https://www.youtube.com"
        onClick={() => console.log(Math.random())}
      />
    </div>

    //JSX ko render được null, boolean, undefined
  )
}

ReactDOM.render(<App3 />, document.getElementById('root'))

function App4() {
  let firstAccess = false
  return (
    <div id="wrapper">
      {firstAccess && <h1>hello</h1>}
    </div>
    /*
    - toán tử &&: tìm thằng nào là false, null, undefined, NaN, '', 0
    tìm được sẽ trả về nó luôn
    nếu ko tìm thì trả về thằng cuối cùng trong vế được so sánh
    - toán tử ||: tìm thằng nào khác false, null, undefined, NaN, '', 0
    tìm được sẽ trả về nó luôn
    nếu ko tìm thì trả về thằng cuối cùng trong vế được so sánh
    false, null, undefined, NaN, '', 0 gọi là các giá trị falsy
    */

    //JSX ko render được null, boolean, undefined
  )
}

ReactDOM.render(<App4 />, document.getElementById('root'))

/*
phần II
- prop trong jsx, có 2 cách truyền props
- <YourComponent
   propName1="String literals" : truyền chuỗi bình thường
   propName2={expression} : biểu thức(ko phải if else/switch case)
 
*/

function Button({ title, primary }) {
  console.log(primary)
  return (
    <button>{title}</button>
  )
}

function App5() {
  return (
    <div id="wrapper">

      <Button primary title={title} />
    </div>
  )
  //primary mà ko khai báo gì thì ở trên mặc định là true
}

ReactDOM.render(<App5 />, document.getElementById('root'))

/*
- toán tử rest/spread
- rest: đóng gói các field còn lại của props thành đối tượng inputProps
*/
function Input({ label, ...inputProps }) {
  return (
    <div>
      <label>{label}</label>
      <input {...inputProps} />
    </div>

  )
}
// ...inputProps ở dưới để rải các field = value của nó

function Button({ title, primary }) {
  console.log(primary)
  return (
    <button>{title}</button>

  )
}

function App6() {
  return (
    <div id="wrapper">
      <Input
        label="FullName"
        type="text"
        placeholder="Enter name..."
        title="Day la input"
      />
    </div>
  )
}
ReactDOM.render(<App6 />, document.getElementById('root'))

/*
    - children props
    + <YourComponent>String literals</YourComponent>
    + <YourComponent>{expression}</YourComponent>
    */
function Button({ children }) {
  console.log(children)
  return (
    <button>{children}</button>
  )
}
function Button2({ children }) {
  console.log(children)
  return (
    <button>{children}</button>
  )
}

function App7() {
  return (
    <div id="wrapper">

      <Button>Hello</Button>
      <Button2>{false || 'DCMM'}</Button2>
    </div>
  )
  //khi truyền cái gì đó vào giữa component hay element, nó là props tên là children
  //button: lấy children prop là Hello
  //button2: lấy children prop là 1 biểu thức, ở đây sẽ là 'hello'
}

ReactDOM.render(<App7 />, document.getElementById('root'))

/*
    - render props: truyền function qua props
    */
function List({ data, children }) {
  return (
    <ul>
      {data.map((...props) => children(...props))}
    </ul>
  )
}


function App8() {
  const cars = ['BMW', 'Honda', 'Mazda']

  return (
    <div id="wrapper">
      <List data={cars}>
        {(item, index) => <li key={index}>{item}</li>}
      </List>
    </div>
  )
}

ReactDOM.render(<App8 />, document.getElementById('root'))

/*
    Bài 1: Danh sách sản phẩm
Cơ bản

Mục tiêu: Truyền function qua children, sử dụng callback để xử lý sự kiện và dùng spread để truyền props.

Yêu cầu

Cho danh sách sản phẩm:

const products = [
  { id: 1, name: 'Laptop', price: 15000000 },
  { id: 2, name: 'Mouse', price: 200000 },
  { id: 3, name: 'Keyboard', price: 500000 }
];

Hãy xây dựng component ProductList với các yêu cầu:

ProductList nhận products, children và onProductClick qua props.

Dùng map() để duyệt danh sách sản phẩm.

Dùng Render Props để component cha quyết định cách hiển thị từng sản phẩm.

Khi nhấn vào sản phẩm, gọi callback onProductClick và truyền sản phẩm được nhấn vào.

Sử dụng spread operator để truyền các props xuống thẻ <li>.
    */
const products = [
  { id: 1, name: 'Laptop', price: 15000000 },
  { id: 2, name: 'Mouse', price: 200000 },
  { id: 3, name: 'Keyboard', price: 500000 }
];


function ProductList({ products, children, onProductClick }) {
  return (
    <ul>
      {products.map((item, index) => {
        var props = {
          className: 'product',
          title: item.name
        }
        return children(item, index, onProductClick, props)
      })
      }
    </ul>
  )
}


function App9() {

  return (
    <div id="wrapper">
      <ProductList
        products={products}
        onProductClick={(name) => console.log(`Bạn vừa mua sản phẩm ${name}`)}
      >
        {
          (item, index, callBack, props) => (
            <li key={index}>
              <div {...props}>
                <h2>Sản phẩm số {item.id}</h2>
                <p>giá: {item.price} vnđ</p>
                <p onClick={() => callBack(item.name)}>Mua hàng</p>
              </div>
            </li>
          )
        }
      </ProductList>
    </div>
  )
}

ReactDOM.render(<App9 />, document.getElementById('root'))
