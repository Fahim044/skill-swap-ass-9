import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../Auth/AuthProvider';

const HeroSlider = () => {
  const {user}=useContext(AuthContext);
  const navigate=useNavigate();
    return (
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">SkillSwap - A Local Skill Exchange Platform</h1>
      <p className="mb-5">
        An interactive platform for individuals to offer, learn, and trade skills within their local area. Whether it's language exchange, coding help, or physical exercise training — users can browse listings, rate experiences, and connect with local skill providers.
      </p>
      {
        !user && <button onClick={()=>navigate("/auth/login")} className="btn btn-primary">Get Started</button>
      }
    </div>
  </div>
</div>
    );
};

export default HeroSlider;