import InventoryGrid from './InventoryGrid';
import { useAppSelector } from '../../store';
import { selectLeftInventory } from '../../store/inventory';
import { Slot } from '../../typings';
import InventorySlot from './InventorySlot';

const LeftInventory: React.FC = () => {
  const leftInventory = useAppSelector(selectLeftInventory);
  const getSlotByNumber = (items: Slot[], slotNumber: number): Slot =>
    items.find((item) => item.slot === slotNumber) ?? ({ slot: slotNumber } as Slot);

  const armorSlot = getSlotByNumber(leftInventory.items, 51);
  const backpackSlot = getSlotByNumber(leftInventory.items, 52);

  return (
    <div className="inventory-left-container">
      <InventoryGrid inventory={leftInventory} />
      <div>

        <div className="inventory-left-special-slots">
          <div className="special-slots-header">
            <p>EQUIPMENT</p>
          </div>
          <div className={`special-slot-wrapper`}>
            <div className="special-slot-info">
              <p className="special-slot-title">ARMOR</p>
            </div>
            <InventorySlot
              item={armorSlot}
              inventoryId={leftInventory.id}
              inventoryType={leftInventory.type}
              inventoryGroups={leftInventory.groups}
            />
          </div>
          <div className={`special-slot-wrapper`}>
            <div className="special-slot-info">
              <p className="special-slot-title">BACKPACK</p>
            </div>
            <InventorySlot
              item={backpackSlot}
              inventoryId={leftInventory.id}
              inventoryType={leftInventory.type}
              inventoryGroups={leftInventory.groups}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftInventory;
