function roadRadar(speed, area) {

    if (area === 'city') {

        let limitSpeed = 50;
        let { differenceSpeed, status } = entryData();

        if (speed <= 50) {

            printNormalSpeed(limitSpeed);

        } else if (speed > 50 && speed <= 70) {

            ({ differenceSpeed, status } = upSpeed20(differenceSpeed, limitSpeed, status));

        } else if (speed > 70 && speed <= 110) {

            ({ differenceSpeed, status } = upSpeed40(differenceSpeed, limitSpeed, status));

        } else {

            ({ differenceSpeed, status } = upSpeedMore40(differenceSpeed, limitSpeed, status));
        }


    } else if (area === 'interstate') {

        let limitSpeed = 90;
        let { differenceSpeed, status } = entryData();

        if (speed <= 90) {

            printNormalSpeed(limitSpeed);

        } else if (speed > 90 && speed <= 110) {

            ({ differenceSpeed, status } = upSpeed20(differenceSpeed, limitSpeed, status));

        } else if (speed > 110 && speed <= 150) {

            ({ differenceSpeed, status } = upSpeed40(differenceSpeed, limitSpeed, status));

        } else {

            ({ differenceSpeed, status } = upSpeedMore40(differenceSpeed, limitSpeed, status));

        }

    } else if (area === 'residential') {

        let limitSpeed = 20;
        let { differenceSpeed, status } = entryData();

        if (speed <= 20) {

            printNormalSpeed(limitSpeed);

        } else if (speed > 20 && speed <= 40) {

            ({ differenceSpeed, status } = upSpeed20(differenceSpeed, limitSpeed, status));

        } else if (speed > 40 && speed <= 80) {

            ({ differenceSpeed, status } = upSpeed40(differenceSpeed, limitSpeed, status));

        } else {
            ({ differenceSpeed, status } = upSpeedMore40(differenceSpeed, limitSpeed, status));
        }

    }
    else if (area === 'motorway') {

        let limitSpeed = 130;
        let { differenceSpeed, status } = entryData();

        if (speed <= 130) {

            printNormalSpeed(limitSpeed);

        } else if (speed > 130 && speed <= 150) {

            ({ differenceSpeed, status } = upSpeed20(differenceSpeed, limitSpeed, status));

        } else if (speed > 150 && speed <= 190) {

            ({ differenceSpeed, status } = upSpeed40(differenceSpeed, limitSpeed, status));

        } else {

            ({ differenceSpeed, status } = upSpeedMore40(differenceSpeed, limitSpeed, status));

        }

    }


    function upSpeedMore40(differenceSpeed, limitSpeed, status) {

        differenceSpeed = speed - limitSpeed;
        status = 'reckless driving';
        console.log(`The speed is ${differenceSpeed} km/h faster than the allowed speed of ${limitSpeed} - ${status}`);
        return { differenceSpeed, status };
    }

    function upSpeed40(differenceSpeed, limitSpeed, status) {

        differenceSpeed = speed - limitSpeed;
        status = 'excessive speeding';
        console.log(`The speed is ${differenceSpeed} km/h faster than the allowed speed of ${limitSpeed} - ${status}`);
        return { differenceSpeed, status };
    }

    function upSpeed20(differenceSpeed, limitSpeed, status) {
        
        differenceSpeed = speed - limitSpeed;
        status = 'speeding';
        console.log(`The speed is ${differenceSpeed} km/h faster than the allowed speed of ${limitSpeed} - ${status}`);
        return { differenceSpeed, status };
    }

    function printNormalSpeed(limitSpeed) {

        console.log(`Driving ${speed} km/h in a ${limitSpeed} zone`);

    }

    function entryData() {
        let differenceSpeed;
        let status;
        return { differenceSpeed, status };
    }
}

roadRadar(21, 'residential');
roadRadar(40, 'city');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway')