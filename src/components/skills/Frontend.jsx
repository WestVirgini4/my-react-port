import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend developer</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills_name">HTML</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills_name">CSS</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills_name">Javascirpt</h3>
                        <span className="skills__level">Intermdiate</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills_name">Git</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills_name">React</h3>
                        <span className="skills__level">Intermdiate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills_name">TailwindCSS</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend