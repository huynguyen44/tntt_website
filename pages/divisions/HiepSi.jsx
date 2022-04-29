/* eslint-disable */
import React from 'react';
import Image from 'next/image';

const HiepSi = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Image src="/assets/HiepSiTeam.JPG" layout="responsive" width={2400} height={1600} />
      <div className="flex justify-center">
          <div className="rounded-lg shadow-lg bg-white max-w-sm">
            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <Image className="rounded-t-lg" src="/assets/KhanhWings.jpg" width={1920} height={1080} alt=""/>
            </a>
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
              <p className="text-gray-700 text-base mb-4">
                  Some quick example text to build on the card title and make up the bulk of the
                  content.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default HiepSi;
/* eslint-disable */