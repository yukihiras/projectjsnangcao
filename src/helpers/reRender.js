const reRender = async (elementRender, content, id) => {
  //Content sẽ là toàn bộ component
  //Cần thêm tham số vào hàm này để truyền id cho những phần detail
  document.querySelector("#content").innerHTML = await content.render(id);

  //sau khi content đã render xong thì afterRender mới được chạy
  if (content.afterRender()) {
    content.afterRender();
  }
};
export default reRender;
