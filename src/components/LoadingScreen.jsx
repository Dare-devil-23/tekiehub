import React from 'react';

const LoadingScreen = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          width: '150px',
          height: '150px',
          backgroundColor: '#000',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0px 0px 20px #fff',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '-100px',
            width: '100px',
            height: '100%',
            backgroundColor: '#fff',
            animation: 'loading-bar 2s infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: '-100px',
            width: '100px',
            height: '100%',
            backgroundColor: '#fff',
            animation: 'loading-bar 2s infinite',
          }}
        />
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: '70%',
              height: '70%',
              backgroundColor: '#007bff',
              borderRadius: '50%',
              position: 'relative',
              boxShadow: '0px 0px 20px #007bff',
              animation: 'loading-glow 2s infinite',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '50%',
                height: '50%',
                top: '25%',
                left: '25%',
                backgroundColor: '#000',
                borderRadius: '50%',
                animation: 'loading-glow 2s infinite',
              }}
            />
          </div>
        </div>
      </div>
      <p
        style={{
          color: '#fff',
          fontSize: '24px',
          marginTop: '20px',
        }}
      >
        Loading...
      </p>
    </div>
  );
};

export default LoadingScreen;
