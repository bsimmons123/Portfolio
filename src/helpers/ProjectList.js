// data.js
import ProjectAdapter from "@/helpers/ProjectAdapter";

const projects = [
    new ProjectAdapter(
        'YCP Personalized Commencement',
        'This project was made for part of my CS320 class: <strong>Software Engineering</strong>. ' +
                'We ended up creating a software solution for students that are graduating during covid. ' +
                'This allowed students to walk the stage and scan a QR code which would display ' +
                'information about the student to the audience.' +
                'To view this project you may click the view icon below and login using some ' +
                'predefined accounts as this project was meant to be linked to the schools accounts' +
                'and not have a feature to create any new accounts'
        ,
        false,
        'https://github.com/bsimmons123/YCP_Personalized_Commencement',
        'personal_comm.png',
        'https://pcomm.brandon-simmons.work/pcomm'
    ),
    new ProjectAdapter(
        'Encoding and Decoding using Clojure',
        'This project was made for part of my CS340 class: <strong>Program Language Design</strong>. ' +
            'I Created a software solution for the ROT 13 cipher written in Clojure. This allowed ' +
            'users to encrypt anything they put in a file to another file that contained the ' +
            'encrypted solution.',
        false,
        'https://github.com/bsimmons123/Encoding-and-Decoding-using-Clojure',
        'rot13.png'
    ),
    new ProjectAdapter(
        'Easy Docker MySql',
        'This project was a <strong>personal project</strong> which allowed for an easier creation ' +
            'of databases while developing different applications. By creating and using this ' +
            'project it allowed for a more streamlined developing process and increased my ' +
            'knowledge into containerized applications',
        false,
        'https://github.com/bsimmons123/ezdocker_mysql',
        'DockerMysql.png'
    ),
    new ProjectAdapter(
        '_rot13-gui',
        'A GUI to showcase a java implementation of ROT 13.',
        false,
        "https://github.com/bsimmons123/ROT13-gui",
        'rot13.png'
    ),
    new ProjectAdapter(
        '_privilege_walk_web_app',
        'This solution not only restores the interactivity of the activity but also introduces additional benefits inherent to a web-based platform, such as enabling students to respond anonymously.',
        true,
        'https://github.com/EthanYCP/PrivilegeWalkWebApp',
        'rot13.png',
        'https://privilege-walk.brandon-simmons.work'
    )
];

export default projects;
