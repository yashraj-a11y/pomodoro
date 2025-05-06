import './NavBar.css'

export default function NavBar(){
    return<>
        <div className="Nav-div">
            <h1 className="Nav-h1">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2rSFs8CNz3NFtHaZ1fomytxAJQX9lNukZQA&s' alt='logo-icon' className="Nav-h1-img"/>
                <div className="Nav-h1-div">PomoFocus</div>
            </h1>

            <span className="Nav-Span">
                <button className="Nav-span-button-Report">
                    <img className="Nav-span-button-Report-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTws0Lpun8NyLLIqZnFjRfutEWdFHNiB2_0dA&s' alt='report-img' />
                    <div className="Nav-span-button-Report-div">Report</div>
                </button>

                <button className="Nav-span-button-Set">
                    <img src='https://w7.pngwing.com/pngs/890/572/png-transparent-computer-icons-settings-white-text-desktop-wallpaper-thumbnail.png' alt='setting-img' className="Nav-span-button-Set-img"/>
                    
                    <div className="Nav-span-button-Set-div">setting</div>
                </button>

                <button className="Nav-span-button-Sign">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFB3H3_9TT0mgZxq9lnEtNDVtqAZOgHdOLxQ&s' alt= 'signup-icon'  className="Nav-span-button-Sign-img"/>
                    <div className="Nav-span-button-Sign-div">SignUp</div>
                </button>

                <button className="Nav-span-button-Dots">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-pV5Fu8dJNkNowdrBii0h6Y0HproEHrOD_A&s' alt='three-dots' className="Nav-span-button-Dots-img"/>
                </button>



            </span>




        </div>
    
    </>
}