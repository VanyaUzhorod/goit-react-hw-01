import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileWrapper}>
      <div className={css.description}>
        <img className={css.userAvatar} src={image} alt={name} />
        <p className={css.userName}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.locationUser}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.li}>
          <span>Followers</span>
          <span className={css.statsSpan}>{stats.followers}</span>
        </li>
        <li className={css.li}>
          <span>Views</span>
          <span className={css.statsSpan}>{stats.views}</span>
        </li>
        <li className={css.li}>
          <span>Likes</span>
          <span className={css.statsSpan}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
