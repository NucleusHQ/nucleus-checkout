import AddonCard from "./AddonCard";

const AddonsList = ({addons = [], setSelectedAddonIds, selectedAddonIds}) => {

    return addons.map(addon => {

        const { id, line1, line2, line3, line4 } = addon;

        const isSelected = selectedAddonIds.includes(id);

        return <AddonCard 
                    addon={addon} 
                    setSelectedAddonIds={setSelectedAddonIds} 
                    selectedAddonIds={selectedAddonIds} 
                    isSelected={isSelected} 
                    line1={line1}
                    line2={line2}
                    line3={line3}
                    line4={line4}
                />
    })
}



export default AddonsList;