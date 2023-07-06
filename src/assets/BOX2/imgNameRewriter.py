import os

# Get the current directory
current_dir = os.path.dirname(os.path.abspath(__file__))

# Get a list of all .jpg files in the directory
jpg_files = [file for file in os.listdir(current_dir) if file.lower().endswith('.jpg')]

# Rename the files
for i, file in enumerate(jpg_files):
    new_name = f"{i+1}.jpg"
    os.rename(os.path.join(current_dir, file), os.path.join(current_dir, new_name))
    print(f"Renamed '{file}' to '{new_name}'")
