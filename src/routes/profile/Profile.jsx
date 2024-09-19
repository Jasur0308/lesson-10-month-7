import { BsStars } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import React from 'react';
import { useGetProfileQuery } from '../../redux/api/profile';

const Profile = () => {
  const { data } = useGetProfileQuery();

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="flex flex-col items-center gap-8">
        {data ? (
          <>
            <div className="text-center">
              <p className="text-2xl font-semibold text-blue-800 mb-2">{data.payload.first_name}</p>
              <div className="flex items-center justify-center">
                <img
                  className="w-48 h-48 object-cover rounded-full border-4 border-blue-200 mb-4"
                  src={data.payload.photo_url}
                  alt="Profile"
                />
              </div>
              <div className="flex justify-center items-center gap-2 mb-4">
                {[...Array(5)].map((_, index) => (
                  <BsStars key={index} className="text-yellow-400" />
                ))}
                <p className="text-lg font-medium text-gray-800">{data.payload.username}</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                {[...Array(5)].map((_, index) => (
                  <BsStars key={index} className="text-yellow-400" />
                ))}
                <div className="flex items-center gap-2">
                  <RxAvatar className="text-xl text-blue-500" />
                  <p className="text-lg font-medium text-gray-800">{data.payload.role}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;