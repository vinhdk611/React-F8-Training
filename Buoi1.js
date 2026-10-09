//btvn: tạo component là courseItem, render title, image_url, description và price_vnd
//sử dụng map()
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

  //btvn: tạo component là courseItem, render title, image_url, description và price_vnd
  //sử dụng map()

  const CourseItem = ({title, image_url, tags, price_vnd}) => {
    return (
        <div className="course-item">
          <p className='course-title'>{title}</p>
          <img src={image_url} alt={title} />
          <p className='course-description'>{tags.join(', ')}</p>
          <p className='course-price'>{price_vnd.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
        </div>
    )
  }

  const PostItem = function() {
    return (
      <div className="post-item">
                    <h2 className="post-title">Tuong tac</h2>
                    <p className="post-desc">kien thuc</p>
                    <p className="post-published">1 day ago</p>
      </div>
    );
  }

  ReactDOM.render(
    <div>
      {courses.map(course => (
        <CourseItem
          key={course.id}
          title={course.title}
          image_url={course.image_url}
          tags={course.tags}
          price_vnd={course.price_vnd}
        />
      ))}
      </div>,
    document.getElementById('root')
  )

  //ReactDOM.render(PostItem(), document.getElementById('root'));
