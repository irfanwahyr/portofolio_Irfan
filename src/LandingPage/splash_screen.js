import React, { useEffect, useState } from 'react';

const Splash = ({ onLoaded }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
      onLoaded();
    }, 30); // Ganti 3000 dengan durasi splash screen (ms)
  }, [onLoaded]);

  return (
    <div className={`Splash ${loading ? 'visible' : 'hidden'}`}>
      {/* Tambahkan konten splash screen di sini */}
      <h1>Splash Screen</h1>
    </div>
  );
};

export default Splash;
