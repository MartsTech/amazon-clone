import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import ProfileHeader from "./ProfileHeader";

interface ProfilePageProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
  const { userDetails } = useStore().userStore;

  return (
    <div className="p-12">
      <ProfileHeader />
      {userDetails && (
        <div
          className="bg-white rounded-lg shadow-lg
          p-8 mt-12 space-y-2"
        >
          <p className="flex pb-4">
            <span className="profile__label">Name</span>
            <span className="flex-[80%]">{userDetails.name}</span>
          </p>
          <p className="flex">
            <span className="profile__label">Email Address</span>
            <span className="flex-[80%]">{userDetails.email}</span>
          </p>
          <p className="flex pb-4">
            <span className="profile__label">Phone</span>
            <span className="flex-[80%]">{userDetails.phone}</span>
          </p>
          <p className="flex pb-4">
            <span className="profile__label">Date of Birth</span>
            <span className="flex-[80%]">{userDetails.birth}</span>
          </p>
          <p className="flex">
            <span className="profile__label">Address</span>
            <span className="flex-[80%] truncate">{`${userDetails.address}, ${userDetails.state}`}</span>
          </p>
          <p className="flex">
            <span className="profile__label">Country</span>
            <span className="flex-[80%]">{userDetails.country}</span>
          </p>
          <p className="flex">
            <span className="profile__label">Zip Code</span>
            <span className="flex-[80%]">{userDetails.zip}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default observer(ProfilePage);
