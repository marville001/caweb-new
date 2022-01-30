import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPrayers } from "../../redux/actions/admin/prayers";
import AddPrayerModal from "../components/PrayersPageComponents/AddPrayerModal";
const PrayersPage = () => {
  const { prayers, isLoadingPrayers, error } = useSelector(
    (state) => state.prayersState
  );
  let [addPrayerModalOpen, setAddPrayerModalOpen] = useState(false);

  const dispatch = useDispatch();

  const closeAddPrayerModal = () => {
    setAddPrayerModalOpen(false);
  };

  const openAddPrayerModal = () => {
    setAddPrayerModalOpen(true);
  };

  useEffect(() => {
    dispatch(getPrayers());
  }, [dispatch]);

  return (
    <div className="rounded-md  p-4">
      <div className="flex justify-between">
        <h4 className="text-2xl text-dodge-blue font-bold">Prayers</h4>
        <button
          onClick={openAddPrayerModal}
          className="p-2 bg-sea-green py-1 px-4 text-white uppercase font-normal rounded-md"
        >
          Add Prayer
        </button>
      </div>
      {error && (
        <div className="bg-red-100 p-2 flex justify-center">
          <p className="text-red-500">{error}</p>
        </div>
      )}
      {isLoadingPrayers && (
        <div className="my-5 flex items-center justify-center">
          <div className="animate-spin">
            <FaSpinner className="w-8 h-8" />
          </div>
        </div>
      )}

      <div className="my-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {prayers.map(({_id, prayer, title}) => (
          <div key={_id} className="bg-white shadow py-2 px-6 rounded-md">
            <h2 className="text-md my-2 font-medium">{title}</h2>
            <p className="text-sm text-justify">
              {prayer.substring(0, 120) } {prayer.length > 120 && " ..."}
            </p>
            <div className="flex justify-between mt-4">
              <Link
                to="/admin/prayers/edit/id"
                className="bg-dodge-blue px-2 rounded text-white text-xs py-1"
              >
                Edit
              </Link>
              <button className="bg-red-300 px-2 rounded text-white text-xs py-1">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <AddPrayerModal
        isOpen={addPrayerModalOpen}
        closeModal={closeAddPrayerModal}
      />
    </div>
  );
};

export default PrayersPage;
