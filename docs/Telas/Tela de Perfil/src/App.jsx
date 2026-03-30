import { useState } from "react";

export default function App() {
  // estados principais
  const [activeTab, setActiveTab] = useState("pets");
  const [showAddPet, setShowAddPet] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showEditPet, setShowEditPet] = useState(false);

  const [editingPet, setEditingPet] = useState(null);

  const [pets, setPets] = useState([
    { id: 1, name: "Rex", breed: "Golden Retriever", age: 3, image: "https://place-puppy.com/100x100" },
    { id: 2, name: "Mia", breed: "Siamês", age: 2, image: "https://placekitten.com/100/100" }
  ]);

  // novo pet
  const [newPet, setNewPet] = useState({
    name: "",
    breed: "",
    age: "",
    image: null,
    preview: ""
  });

  const [errorImage, setErrorImage] = useState(false);

  // upload de imagem
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErrorImage(true);
      return;
    }

    setErrorImage(false);

    const preview = URL.createObjectURL(file);

    setNewPet((prev) => ({
      ...prev,
      image: file,
      preview: preview
    }));
  };

  // adicionar pet
  const handleAddPet = () => {
    if (!newPet.name || !newPet.breed) {
      alert("Preencha os campos obrigatórios");
      return;
    }

    const newPetData = {
      id: Date.now(),
      name: newPet.name,
      breed: newPet.breed,
      age: newPet.age,
      image: newPet.preview || "https://place-puppy.com/100x100"
    };

    setPets((prev) => [...prev, newPetData]);

    // reset
    setNewPet({
      name: "",
      breed: "",
      age: "",
      image: null,
      preview: ""
    });

    setShowAddPet(false);
  };

  // excluir pet
  const handleDeletePet = (id) => {
    const confirmDelete = confirm("Tem certeza que deseja excluir?");
    if (confirmDelete) {
      setPets((prev) => prev.filter((p) => p.id !== id));
    }
  };

  // salvar edição
  const handleSaveEditPet = () => {
    setPets((prev) =>
      prev.map((p) => (p.id === editingPet.id ? editingPet : p))
    );

    setShowEditPet(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-green-200 to-green-100 p-6 text-center">
        <img src="https://i.pravatar.cc/100?img=4" className="w-24 h-24 rounded-full mx-auto" />

        <h1 className="text-xl font-bold mt-2">Gabriel</h1>
        <p className="text-gray-600">gabriel@email.com</p>
        <p className="text-gray-600">(44) 99999-9999</p>

        <button
          onClick={() => setShowEditProfile(true)}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        >
          Editar Perfil
        </button>
      </div>

      {/* TABS */}
      <div className="flex justify-center mt-4 gap-4">
        <button onClick={() => setActiveTab("pets")}>
          Meus Pets
        </button>

        <button onClick={() => setActiveTab("settings")}>
          Configurações
        </button>
      </div>

      {/* CONTEÚDO */}
      <div className="p-4 max-w-xl mx-auto">

        {activeTab === "pets" && (
          <div>
            <div className="flex justify-between mb-4">
              <h2>{pets.length} Pets</h2>

              <button onClick={() => setShowAddPet(true)}>
                + Adicionar Pet
              </button>
            </div>

            {pets.map((pet) => (
              <div key={pet.id} className="bg-white p-3 mb-2 flex justify-between">

                <div className="flex gap-3">
                  <img src={pet.image} className="w-12 h-12 rounded-full" />
                  <div>
                    <p>{pet.name}</p>
                    <p>{pet.breed} • {pet.age} anos</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button onClick={() => {
                    setEditingPet(pet);
                    setShowEditPet(true);
                  }}>
                    ✏️
                  </button>

                  <button onClick={() => handleDeletePet(pet.id)}>
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
      {/* MODAL EDITAR PERFIL */}
      {showEditProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          
          <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
            <h2 className="text-lg font-bold mb-4">Editar Perfil</h2>

            {/* NOME */}
            <div className="mb-3">
              <label className="text-sm text-gray-600">Nome</label>
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* EMAIL */}
            <div className="mb-3">
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* TELEFONE */}
            <div className="mb-3">
              <label className="text-sm text-gray-600">Telefone</label>
              <input
                type="text"
                placeholder="(00) 00000-0000"
                className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* BIO */}
            <div className="mb-4">
              <label className="text-sm text-gray-600">Bio</label>
              <textarea
                placeholder="Fale sobre você..."
                className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* BOTÕES */}
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowEditProfile(false)}
                className="px-4 py-2 rounded-lg border"
              >
                Cancelar
              </button>

              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                Salvar
              </button>
            </div>
          </div>

        </div>
      )}

      {/* MODAL ADICIONAR PET*/}
      {showAddPet && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">

          <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
            <h2 className="text-lg font-bold mb-4">Adicionar Pet</h2>

            {/* NOME */}
            <div className="mb-3">
              <label className="text-sm text-gray-600">Nome</label>
              <input
                type="text"
                placeholder="Digite o nome"
                value={newPet.name}
                onChange={(e) =>
                  setNewPet({ ...newPet, name: e.target.value })
                }
                className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* RAÇA */}
            <div className="mb-3">
              <label className="text-sm text-gray-600">Raça</label>
              <input
                type="text"
                placeholder="Ex: Golden Retriever"
                value={newPet.breed}
                onChange={(e) =>
                  setNewPet({ ...newPet, breed: e.target.value })
                }
                className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* IDADE */}
            <div className="mb-3">
              <label className="text-sm text-gray-600">Idade</label>
              <input
                type="number"
                placeholder="Ex: 3"
                value={newPet.age}
                onChange={(e) =>
                  setNewPet({ ...newPet, age: e.target.value })
                }
                className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* FOTO BONITA */}
            <div className="mb-4">
              <label className="text-sm text-gray-600">Foto</label>

              <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 mt-1 cursor-pointer hover:border-green-500 transition">
                
                {newPet.preview ? (
                  <img
                    src={newPet.preview}
                    className="w-20 h-20 object-cover rounded-full mb-2"
                  />
                ) : (
                  <span className="text-gray-500 text-sm">
                    Clique para enviar imagem
                  </span>
                )}

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>

              {errorImage && (
                <p className="text-red-500 text-xs mt-1">
                  Apenas imagens são permitidas!
                </p>
              )}
            </div>

            {/* BOTÕES */}
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowAddPet(false)}
                className="px-4 py-2 rounded-lg border"
              >
                Cancelar
              </button>

              <button
                onClick={handleAddPet}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Salvar
              </button>
            </div>

          </div>

        </div>
      )}

      {/* MODAL EDITAR PET */}
      {showEditPet && editingPet && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          
          <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
            <h2 className="text-lg font-bold mb-4">Editar Pet</h2>

            {/* NOME */}
            <div className="mb-3">
              <label className="text-sm text-gray-600">Nome</label>
              <input
                type="text"
                value={editingPet.name}
                onChange={(e) =>
                  setEditingPet({ ...editingPet, name: e.target.value })
                }
                className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* RAÇA */}
            <div className="mb-3">
              <label className="text-sm text-gray-600">Raça</label>
              <input
                type="text"
                value={editingPet.breed}
                onChange={(e) =>
                  setEditingPet({ ...editingPet, breed: e.target.value })
                }
                className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* IDADE */}
            <div className="mb-3">
              <label className="text-sm text-gray-600">Idade</label>
              <input
                type="number"
                value={editingPet.age}
                onChange={(e) =>
                  setEditingPet({ ...editingPet, age: e.target.value })
                }
                className="w-full border rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* FOTO */}
            <div className="mb-4">
              <label className="text-sm text-gray-600">Foto</label>

              <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 mt-1 cursor-pointer hover:border-green-500 transition">
                {editingPet.image ? (
                  <img
                    src={editingPet.image}
                    className="w-20 h-20 object-cover rounded-full mb-2"
                  />
                ) : (
                  <span className="text-gray-500 text-sm">
                    Clique para alterar imagem
                  </span>
                )}

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];

                    if (!file || !file.type.startsWith("image/")) {
                      alert("Apenas imagens!");
                      return;
                    }

                    const preview = URL.createObjectURL(file);

                    setEditingPet({
                      ...editingPet,
                      image: preview,
                    });
                  }}
                  className="hidden"
                />
              </label>
            </div>

            {/* BOTÕES */}
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowEditPet(false)}
                className="px-4 py-2 rounded-lg border"
              >
                Cancelar
              </button>

              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                onClick={() => {
                  setPets(
                    pets.map((p) =>
                      p.id === editingPet.id ? editingPet : p
                    )
                  );
                  setShowEditPet(false);
                }}
              >
                Salvar
              </button>
            </div>
          </div>

        </div>
      )}
    
  </div>
);
}