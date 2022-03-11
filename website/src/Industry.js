import mint from "./images/mint.jpg";
// This file contains general solutions (Heat, light and ventilation)

function LED() {
  return (
    <>
      <h3>LED lights can result in simple savings</h3>
        <p>Often businesses use up a lot of energy through lighting.
            According to the EPA, Energy Star-rated bulbs use 75-percent less energy than incandescent bulbs.
            They also last up to 10 times <a href="https://www.bartingalemechanical.com/strategies-to-save-energy-in-commercial-buildings/"
            >longer</a>.</p>
    </>
  );
}

function NaturalLight() {
    return (
        <>
            <h3>Natural light</h3>
            <p>Natural light significantly increases energy, creativity, and productivity.
                Workers exposed to natural lighting stayed on-task for 15% longer than their sun-deprived <a href="https://myturnstone.com/blog/7-ways-office-space-can-improve-productivity/"
                >counterparts</a>.</p>
        </>
    );
}

function Solar() {
    return (
        <>
            <h3>Consider implementing solar power solutions</h3>
            <p>If you really want to ensure that your coworking office space is energy-efficient,
                and has as little impact on the environment as possible, you might also want to consider implementing
                solar power energy solutions. Especially if your business is located in an area that experiences a lot
                of sunny days, you can greatly benefit from going <a href="https://www.chargespot.com/workspaces/6-ways-to-revamp-your-coworking-office-space-to-be-more-energy-efficient-and-sustainable/"
                >solar</a>.</p>
        </>
    );
}

function Insulation() {
    return (
        <>
            <h3>Insulation saves energy</h3>
            <p>Adding insulation is another easy way to save energy.
                It’s fairly inexpensive. According to the EPA, you can save 10-percent of your energy bill by
                installing proper insulation and sealing your  <a href="https://www.bartingalemechanical.com/strategies-to-save-energy-in-commercial-buildings/"
                >building</a>.</p>
        </>
    );
}

function IoT() {
    return (
        <>
            <h3>Use IoT devices and sensors to reduce energy usage</h3>
            <p>Use IoT devices to increase efficiency through out your facility. Use them to control the heating in areas,
                perhaps to turn off usage when the space is empty. Thus saving <a href="https://www.zdnet.com/article/10-ways-smart-offices-are-saving-energy-and-lowering-their-carbon-footprint/"
                >energy</a>.</p>
        </>
    );
}

function SmartBuilding() {
    return (
        <>
            <h3>Utilize smart building technology</h3>
            <p>The latest controls and programmable thermostats should be part of your strategy to reduce energy consumption.
                Doesn't it make sense to reduce or turn off lighting, heat and air conditioning when your building is not in use?
                Smart building controls eliminate the human forgetfulness factor of failing to turn off or down lighting
                and <a href="https://www.bartingalemechanical.com/strategies-to-save-energy-in-commercial-buildings/"
                >HVAC</a>.</p>
        </>
    );
}

function SmartVentilation() {
    return (
        <>
            <h3>Energy-efficient ventilation</h3>
            <p>The system makes it possible to improve the energy efficiency of ventilation and the property with the
                elimination of clock-controlled ventilation boosting. When clock-controlled boosting periods are eliminated,
                heated air is not unnecessarily removed from the building. For <a href="https://climeconair.com/fi-en/myair-smart-ventilation/"
                >example</a>.</p>
        </>
    );
}

function Production() {
    return (
        <>
            <h3>Maintaining equipment</h3>
            <p>Equipment requires periodic maintenance to work at peak efficiency.</p>
            <h3>Invest in more efficient equipment</h3>
            <p>The right manufacturing plant accessories and equipment can make a significant difference regarding your plant’s overall performance.
                It pays to purchase the proper equipment. The more efficient your equipment, the less energy you use. </p>
            <h3>Overproduction - Do you frequently produce more than you can sell ?</h3>
            <p>Overproduction is a significant source of waste, as your plant ends up making more than it can sell.
                When you overproduce items, you lose valuable money and energy. The energy spent making these products could
                have been better spent on producing in-demand items or saved.</p>
            <h3>Automate processes</h3>
            <p>Automation will improve efficiency and lead to less waste in energy as business processes run faster
                removing the issues related to the human factor. The initial investment will be recouped over time.</p>
            <p><a href="https://www.eammosca.com/blog/tips-to-optimize-the-performance-of-your-manufacturing-plant/"
            >Source</a></p>
        </>
    );
}

function Laptops() {
    return (
        <>
            <h3>Consider investing in laptops over desktops</h3>
            <p>Laptops can travel. They can do most things desktops can do, and they take up less desk space.
                They're easily stowed after use. Furthermore, they are more power efficient compared to <a href={"https://www.energystar.gov/products/computers"}>desktops</a>.</p>
        </>
    );
}

function Remote() {
    return (
        <>
            <h3>Consider allowing staff to work from home</h3>
            <p>The less people in the work areas, the less is required from your heating and cooling solution. Furthermore,
                office electronics are used less. Not to mention the emissions saved from daily commuting. This all adds
                up to reduce energy usage in your <a href={"https://www.airmeet.com/hub/blog/environmental-benefits-of-remote-work/"}>company</a>.</p>
        </>
    );
}

function Server() {
    return (
        <>
            <h3>Consolidate lightly used servers</h3>
            <p>Most servers aren’t running anywhere near capacity.  Consolidate and remove unneeded hardware. This would reduce the energy used as well
            as save on unneeded hardware and maintenance. </p>
            <h3>Implement efficient data storage measures</h3>
            <p>A variety of tools and technologies (like the cloud) are available to help reduce the amount of data you store,
                and to store what you need more efficiently. Reducing the amount of data stored on site removed demand on IT devices and hence energy by
            your company.</p>
            <h3>Implement power management options</h3>
            <p>Servers and most modern IT devices come with power saving features that can be activated. Servers can be configured to operate at lower
            power modes when not utilised. Modern Uninterrupted Power Supply (UPS) systems can minimise electrical losses and may feature an eco-mode to
                further lower energy consumption. </p>
            <h3>Manage efficient airflow</h3>
            <p>Inexpensive grommets, diffusers, and blanking panels can keep cold air from mixing with hot exhaust air. This ensures
            the proper cooling of the server, increasing efficiency and lowering cooling (energy) demand. </p>
            <h3>Use sensors and controls to match cooling capacity & airflow with IT loads</h3>
            <p>Implementing a Data Center Infrastructure Management system using IoT devices ensures that energy, equipment and
            floor space is used according to the demand.</p>
            <p>Check this <a href={"https://www.energystar.gov/products/16_more_ways_cut_energy_waste_data_center"}>link</a> for more info</p>
        </>
    );
}


export {LED, NaturalLight, Solar, Insulation, IoT, SmartBuilding, SmartVentilation, Production, Laptops, Remote, Server};
