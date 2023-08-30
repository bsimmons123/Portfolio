// data.js
const projects = [
    {
        title: 'YCP Personalized Commencement',
        description: '' +
            '<p>' +
                'This project was made for part of my CS320 class: Software Engineering. ' +
                'We ended up creating a software solution for students that are graduating during covid. ' +
                'This allowed students to walk the stage and scan a QR code which would display ' +
                'information about the student to the audience.' +
            '</p>' +
            '<p>' +
                'To view this project you may click the view icon below and login using some' +
                'predefined accounts as this project was meant to be linked to the schools accounts' +
                'and not have a feature to create any new accounts' +
            '</p>' +
            '<div style="display: flex;\n' +
            '  flex-direction: column;\n' +
            '  align-items: center;\n' +
            '  margin-top: 20px;\n' +
            '  font-family: monospace;">' +
                '<div style="background-color: #f0f0f0;\n' +
                '  padding: 5px 10px;\n' +
                '  border-radius: 5px;\n' +
                '  margin-bottom: 10px;">' +
                    'Student<br>User: bsimmons1@ycp.edu<br>Pass: test<br><hr/>' +
                    'Advisor<br>User: jmoscola@ycp.edu<br>Pass: test' +
                '</div>' +
            '</div>'
        ,
        canView: false,
        githubLink: 'https://github.com/bsimmons123/YCP_Personalized_Commencement',
        image: 'personal_comm.png',
        viewLink: 'https://pcomm.brandon-simmons.work/pcomm'
    },
    {
        title: 'Encoding and Decoding using Clojure',
        description: 'This project was made for part of my CS340 class: Program Language Design. ' +
            'I Created a software solution for the ROT 13 cipher written in Clojure. This allowed ' +
            'users to encrypt anything they put in a file to another file that contained the ' +
            'encrypted solution.',
        canView: false,
        githubLink: 'https://github.com/bsimmons123/Encoding-and-Decoding-using-Clojure',
        image: 'rot13.png'
    },
    {
        title: 'Easy Docker MySql',
        description: 'This project was a personal project which allowed for an easier creation ' +
            'of databases while developing different applications. By creating and using this ' +
            'project it allowed for a more streamlined developing process and increased my ' +
            'knowledge into containerized applications',
        canView: false,
        githubLink: 'https://github.com/bsimmons123/ezdocker_mysql',
        image: 'DockerMysql.png'
    },
];

export default projects;
