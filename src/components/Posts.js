import axios from "axios";
import React from "react";
import "../css/Pots.css";
function Posts() {
 

 

  return (
    <div className="post_Container">

      
      

      <div className="post">
        <div className="header_Post">
          <div className="user_Img">
            <img src="https://notagamer.net/wp-content/uploads/2022/01/maxresdefault-1-1024x576.jpg"></img>
          </div>

          <p className="user_Name">Nguyen Bui Tai</p>
          <p className="posts_Time">12h ago</p>
          <div className="add_Icon"><i class="fa-solid fa-user-plus"></i></div>
        </div>
        
        <div className="body_Post">
          <p className="post_Caption">Hôm nay mới lấy được em skin này ngon quá</p>
          <div className="post_Img">
            <img src="https://notagamer.net/wp-content/uploads/2022/01/maxresdefault-1-1024x576.jpg"></img>
          </div>
        </div>
        
        <div className="footer_Post">
          <div><i class="fa-solid fa-heart"></i></div>
          <div><i class="fa-solid fa-ellipsis"></i></div>
        </div>
      </div>

      <div className="post">
        <div className="header_Post">
          <div className="user_Img">
            <img src="https://notagamer.net/wp-content/uploads/2022/01/maxresdefault-1-1024x576.jpg"></img>
          </div>

          <p className="user_Name">Nguyen Bui Tai</p>
          <p className="posts_Time">12h ago</p>
          <div className="add_Icon"><i class="fa-solid fa-user-plus"></i></div>
        </div>
        
        <div className="body_Post">
          <p className="post_Caption">Hôm nay mới lấy được em skin này ngon quá</p>
          <div className="post_Img">
            <img src="https://notagamer.net/wp-content/uploads/2022/01/maxresdefault-1-1024x576.jpg"></img>
          </div>
        </div>
        
        <div className="footer_Post">
          <div><i class="fa-solid fa-heart"></i></div>
          <div><i class="fa-solid fa-ellipsis"></i></div>
        </div>
      </div>

      <div className="post">
        <div className="header_Post">
          <div className="user_Img">
            <img src="https://notagamer.net/wp-content/uploads/2022/01/maxresdefault-1-1024x576.jpg"></img>
          </div>

          <p className="user_Name">Nguyen Bui Tai</p>
          <p className="posts_Time">12h ago</p>
          <div className="add_Icon"><i class="fa-solid fa-user-plus"></i></div>
        </div>
        
        <div className="body_Post">
          <p className="post_Caption">Hôm nay mới lấy được em skin này ngon quá</p>
          <div className="post_Img">
            <img src="https://notagamer.net/wp-content/uploads/2022/01/maxresdefault-1-1024x576.jpg"></img>
          </div>
        </div>
        
        <div className="footer_Post">
          <div><i class="fa-solid fa-heart"></i></div>
          <div><i class="fa-solid fa-ellipsis"></i></div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
