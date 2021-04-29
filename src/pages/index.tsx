import Container from 'layouts/Container';
import Seo from 'components/Seo';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';

const MainPage = () => (
  <Fragment>
    <Container>
      <Fragment>
        <Seo title="Home" />
        <div className="">
          {
            //Header
          }
          <div className="grid grid-cols-12">
            <div className="col-span-9 bg-gray-100 p-4 font-semibold rounded-lg grid grid-cols-12">
              <div className="col-span-1">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <input className=" bg-gray-100 col-span-11 focus:outline-none" placeholder="Search..." />
            </div>
            <div className="col-span-3 flex items-center justify-end gap-5">
              <div>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="p-4 bg-primary-main rounded-lg text-center text-white">
                <FontAwesomeIcon icon={faBell} />
              </div>
            </div>
          </div>
          {
            //Body
          }
          <div className="bg-green-500 mt-10">
            <h3 className="font-semibold text-2xl">Your unfinished courses</h3>
            <div className="mt-5 grid grid-flow-col grid-cols-2 gap-4">
              {[
                {
                  key: '1',
                  img: '/user_1.png',
                  description: 'Learning how to create simple Swift applications in 8 lessons',
                  minutes: 82,
                  blurColor: 'rgba(60, 17, 134, 0.3)',
                  coverStyle: {
                    background: 'rgba(0, 0, 0, 0.2)',
                    opacity: '0.3',
                  },
                },
                {
                  key: '2',
                  img: '/user_2.png',
                  description: 'Best tips for drawing some good thematic illustration',
                  minutes: 90,
                  blurColor: 'rgba(148, 37, 57, 0.3);',
                  coverStyle: {
                    background:
                      'linear-gradient(180deg, #511D28 15.1%, rgba(108, 40, 53, 0) 48.44%, rgba(92, 26, 36, 0.69) 100%)',
                    opacity: '0.7',
                  },
                },
              ].map((item) => (
                <div key={item.key} className="overflow-hidden rounded-3xl relative">
                  <div className="absolute w-full h-full p-8" style={item.coverStyle} />
                  <div className="absolute w-full h-full p-8 flex flex-col justify-between">
                    <div className="text-white">
                      <div className="inline-flex items-center">
                        <div
                          className="rounded-full overflow-hidden border-2 border-primary-main"
                          style={{ width: 45, height: 45, padding: 1.5 }}
                        >
                          <img className="rounded-full" src={item.img} width="100%" height="auto" />
                        </div>
                        <div className="ml-5">
                          <p className="font-bold text-base">Dianne Edwards</p>
                          <p className="font-normal text-sm">@dianneed</p>
                        </div>
                      </div>
                      <div className="float-right">
                        <button className="btn bg-primary-main">{`${item.minutes} min`}</button>
                      </div>
                    </div>
                    <div
                      className="text-white relative p-4 rounded-3xl text-lg"
                      style={{ background: item.blurColor, backdropFilter: 'blur(10px)' }}
                    >
                      {item.description}
                    </div>
                  </div>
                  <img src={`/image_${item.key}.png`} height="auto" width="100%" />
                </div>
              ))}
              {/* <div className="bg-red-400">2</div> */}
            </div>
          </div>
        </div>
      </Fragment>
    </Container>
  </Fragment>
);

export default MainPage;
