import { css } from "@emotion/css";

export const moreInfoStyles = css`
 .floating-card {
  margin-top: -200px;
}

.profile-card {
  border-radius: 25px;
}


.profile-photo {
  position: relative;
  cursor: pointer;
}

.profile-photo img {
  width: 100%;
  object-fit: cover;
  margin-top:19px;
  display: block;
  height:285px;
  border-radius:10px;
  border:1px;
}

.section-about .profile-photo {
  margin-right: 10%;
  margin-bottom: 10px;
}


.profile-card .card-action {
  height: 70px;
  background-color: #ff914d;
  color: white;
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
}

.profile-card .card-action .fa {
  color: white;
  font-size: 22px;
  margin-left: 5%;

}

.horizontal-line {
  height: 2px;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
  background-color: #e0e0e0;
}

.profile-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.profile-list li {
  margin-bottom: 13px;
}

.profile-list .title {
  display: block;
  width: 120px;
  float: left;
  color: #333333;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
}

.profile-list .cont {
  display: block;
  margin-left: 125px;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  color: #9da0a7;
}

.profile-list .cont a {
  color: inherit;
}

.clearfix {
  overflow: auto;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}





@media (max-width: 992px) {
  .profile-photo img {
    margin-top:0px;
  }
  .section-about .profile-photo {
    margin-right: 0;
    margin-bottom: 30px;
  }

  .section-about .profile {
    padding: 50px 40px 15px 40px;
  }

  .section-about .profile-photo {
    margin-right: 0;
    margin-bottom: 30px;
  }
}

@media (max-width: 767px) {




  .profile-photo img {
    margin-top:0px;
  }

  .profile-info {
    text-align: center;
  }

  .profile-card .card-action .fa {

    margin-left: 2%;

  }

  .section-about .profile-photo {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  .profile-list .title,
  .profile-list .cont {
    width: 100%;
    float: none;
    line-height: 1.2;
  }

  .profile-list .title {
    margin-bottom: 3px;
  }

  .profile-list .cont {
    margin-left: 0;
    margin-bottom: 15px;
  }

  .resume-content {
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
  }
}


.no-boxshadow .sidebar-default .profile-photo img {
  border: 1px solid #dedede;
}

.no-boxshadow.theme-skin-dark .sidebar-default .profile-photo img {
  border: 1px solid #525458;
}

`